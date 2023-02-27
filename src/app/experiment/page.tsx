import Image from 'next/image'
import shibaPic from '@/images/shiba.jpg'
// https://beta.nextjs.org/docs/optimizing/images

export default function ExperimentPage() {
  return (
    <>
      {/*  로컬 이미지 - Cumulative Layout Shift 자동 방지 */}
      <Image src={shibaPic} alt='Picture of a cute baby shiba inu' priority />
      <button>버튼</button>
      {/* 원격 이미지 - 빌드 때 사이즈 계산 불가 */}
      <Image
        src={'https://placekitten.com/500/500'}
        alt='Picture of a cute baby kitten'
        width={500}
        height={500}
      />
    </>
  )
}
