import { useMemo } from "react"
import { useQuery } from "react-query"
import { findImages } from '../services/docker'

export const useDockerImages = ({ imageName }: { imageName?: string }) => {

  const fetchImages = () => {
    if(imageName) {
      return findImages(imageName)
    }
  }

  const key = useMemo(() => {
    if(imageName) {
      return `image-${btoa(imageName)}`
    }
    return 'images';
  }, [imageName])

  return useQuery(key, fetchImages, { 
    enabled: Boolean(imageName?.length)
  })
}

