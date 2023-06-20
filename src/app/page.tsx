"use client"
import React, { useEffect, useState } from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

export default function Home() {
  const [linkToShare, setLinkToShare] = useState<any>()
  useEffect(() => {
    setLinkToShare(window.location.href)
  }, [])

  return (
    <div>
      <h1>Social Share - GeeksforGeeks</h1>
      <FacebookShareButton
        url={linkToShare} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <RedditShareButton
        url={linkToShare} >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={linkToShare} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={linkToShare} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  )
}