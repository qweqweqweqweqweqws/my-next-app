import { useEffect, useState } from "react"

const useExperiment = (experimentId: string) => {
  const [variant, setVariant] = useState()
  useEffect(() => {
    ;(async () => {
      if (typeof window !== 'undefined') {
        if ((window as any).dataLayer) {
          await (window as any).dataLayer.push({ event: 'optimize.activate' })
        }
        const intervalId = setInterval(() => {
          if ((window as any).google_optimize !== undefined) {
            setVariant((window as any).google_optimize.get(experimentId))
            clearInterval(intervalId)
          }
        }, 100)
      }
    })()
  })
  return variant
}

export default useExperiment
