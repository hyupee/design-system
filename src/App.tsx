import { useState } from 'react'
import { Typography } from './components/Typography/Typography'

function App() {

  return (
    <div className="App">
      <Typography as='p' size='xs' weight='light'>Typography</Typography>
      <Typography as='p' size='xs' weight='regular'>Typography</Typography>
      <Typography as='p' size='xs' weight='semiBold'>Typography</Typography>
      <Typography as='p' size='xs' weight='bold'>Typography</Typography>

      <Typography as='p' size='sm' weight='light'>Typography</Typography>
      <Typography as='p' size='sm' weight='regular'>Typography</Typography>
      <Typography as='p' size='sm' weight='semiBold'>Typography</Typography>
      <Typography as='p' size='sm' weight='bold'>Typography</Typography>

      <Typography as='p' size='md' weight='light'>Typography</Typography>
      <Typography as='p' size='md' weight='regular'>Typography</Typography>
      <Typography as='p' size='md' weight='semiBold'>Typography</Typography>
      <Typography as='p' size='md' weight='bold'>Typography</Typography>

      <Typography as='p' size='lg' weight='light'>Typography</Typography>
      <Typography as='p' size='lg' weight='regular'>Typography</Typography>
      <Typography as='p' size='lg' weight='semiBold'>Typography</Typography>
      <Typography as='p' size='lg' weight='bold'>Typography</Typography>

      <Typography as='p' size='xl' weight='light'>Typography</Typography>
      <Typography as='p' size='xl' weight='regular'>Typography</Typography>
      <Typography as='p' size='xl' weight='semiBold'>Typography</Typography>
      <Typography as='p' size='xl' weight='bold'>Typography</Typography>

      <Typography as='p' size='xxl' weight='light'>Typography</Typography>
      <Typography as='p' size='xxl' weight='regular'>Typography</Typography>
      <Typography as='p' size='xxl' weight='semiBold'>Typography</Typography>
      <Typography as='p' size='xxl' weight='bold'>Typography</Typography>
    </div>
  )
}

export default App
