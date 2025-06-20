"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Video, ChevronDown } from "lucide-react"
import styles from "./gallery.module.css"

interface GalleryProps {
  title?: string
}

const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=300&width=400&text=Foto ${i + 1}`,
  alt: `Foto del curso ${i + 1}`,
}))

const videos = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=300&width=400&text=Video ${i + 1}`,
  alt: `Video del curso ${i + 1}`,
  thumbnail: `/placeholder.svg?height=300&width=400&text=Video ${i + 1}`,
}))

export function Gallery({ title = "Galería del Curso" }: GalleryProps) {
  const [visiblePhotos, setVisiblePhotos] = useState(3)
  const [visibleVideos, setVisibleVideos] = useState(3)

  const loadMorePhotos = () => {
    setVisiblePhotos((prev) => Math.min(prev + 3, photos.length))
  }

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => Math.min(prev + 3, videos.length))
  }

  return (
    <section className={styles.gallery}>
      <div className="container">
        <h2 className={styles.galleryTitle}>{title}</h2>

        {/* Photos Section */}
        <div className={styles.gallerySection}>
          <h3 className={styles.sectionTitle}>
            <Camera size={24} />
            Fotografías
          </h3>
          <div className={styles.galleryGrid}>
            {photos.slice(0, visiblePhotos).map((photo) => (
              <div key={photo.id} className={styles.galleryItem}>
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
          {visiblePhotos < photos.length && (
            <button onClick={loadMorePhotos} className={styles.loadMoreButton}>
              Ver más fotos
              <ChevronDown size={16} />
            </button>
          )}
        </div>

        {/* Videos Section */}
        <div className={styles.gallerySection}>
          <h3 className={styles.sectionTitle}>
            <Video size={24} />
            Videos
          </h3>
          <div className={styles.galleryGrid}>
            {videos.slice(0, visibleVideos).map((video) => (
              <div key={video.id} className={styles.galleryItem}>
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.alt}
                  width={400}
                  height={300}
                  className={styles.galleryVideo}
                />
                <div className={styles.videoOverlay}>
                  <Video size={24} />
                </div>
              </div>
            ))}
          </div>
          {visibleVideos < videos.length && (
            <button onClick={loadMoreVideos} className={styles.loadMoreButton}>
              Ver más videos
              <ChevronDown size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
