import React from 'react'
import { Breadcrumbs } from '../BreadCrumbsMain'
import EventCategory from './EventCateogry'
import Gallery from './Gallery'

export const GalleryMain = () => {
  return (<>
  <Breadcrumbs title="Gallery" activePath="/gallery" />

    <EventCategory/>
    <Gallery/>
    </>
  )
}
