import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Faq = () => {
    const [show, setshow] = useState(false)
  return (
    <SafeAreaView>
      <Text>Answer Your City</Text>
      <Text >ChuhaPur</Text>
    </SafeAreaView>
  )
}

export default Faq

const styles = StyleSheet.create({})