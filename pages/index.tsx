import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAppDispatch,useAppSelector } from '../store/hooks'
import { cartSelector, setData } from '../store/cart.slice'
import React from 'react'
import { List } from '../components/List'
import { AnimatePresence } from 'framer-motion'


const Home: NextPage = () => {
const {data} =useAppSelector(cartSelector)

  const dispatch = useAppDispatch()

  React.useEffect(()=>{
dispatch(setData([1,2,3]))

  },[])
  return (
    <>
    <List  />
  
  </>
  )
}

export default Home
