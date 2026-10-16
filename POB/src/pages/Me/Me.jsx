import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function Me() {

  const style = {
    card: {

      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
    }
  };
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-4'>
      <Card style={style.card}>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
          <CardDescription>This is a simple profile card.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the content of the profile card.</p>
        </CardContent>
        <CardFooter>
          <p>Footer content</p>
        </CardFooter>
      </Card>

      <Card style={style.card}>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
    </div>
  )
}

export default Me