'use client'

import React from 'react'

import { HydrationBoundary, HydrationBoundaryProps } from '@tanstack/react-query'

function Hydrate(props: HydrationBoundaryProps) {
  return <HydrationBoundary {...props} />
}

export default Hydrate
