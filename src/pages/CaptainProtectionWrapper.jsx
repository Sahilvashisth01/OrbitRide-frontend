import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('captain-token') // ✅ correct key
  const navigate = useNavigate()
  const { captain, setCaptain } = useContext(CaptainDataContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      navigate('/captain-login')
      return
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain)
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.error('Auth failed:', err.response?.data || err.message)
        localStorage.removeItem('captain-token') // ✅ remove correct key
        navigate('/captain-login')
      })
  }, [token, navigate, setCaptain])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default CaptainProtectWrapper
