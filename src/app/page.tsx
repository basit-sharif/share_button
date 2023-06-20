"use client"
import React from 'react'
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
  return (
    <div>
      <h1>Social Share - GeeksforGeeks</h1>
      <FacebookShareButton
        url={window.location.href} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <RedditShareButton
        url={window.location.href} >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={window.location.href} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={window.location.href} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  )
}