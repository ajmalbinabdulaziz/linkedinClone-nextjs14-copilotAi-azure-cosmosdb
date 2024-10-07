import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const PostForm = () => {
    const { user } = useUser()


  return (
    <div>
      <form action="">
        <div>
            <Avatar>
                <AvatarImage src={user?.imageUrl} />
                <AvatarFallback>
                    {user?.firstName?.charAt(0)}
                    {user?.lastName?.charAt(0)}
                </AvatarFallback>
            </Avatar>  

            
        </div>
      </form>
    </div>
  )
}

export default PostForm
