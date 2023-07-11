import { SliderComp } from './SliderComp'

const data = [
  {
    title: "Cox's Bazar",
    image:
      'https://lh5.googleusercontent.com/p/AF1QipNqTlXvvLxFc6O29ah16IxwmcTZD61u3Bjx9gH0=w548-h318-n-k-no',
  },
  {
    title: "Saint Martin's Island",
    image:
      'https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/details/3166475_Trip%20Saint%20Martin%20Bangladesh.jpg',
  },
  {
    title: 'Jaflong',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipOye4s8yd87ykI7iHhYLba_rz8ez95kr37vAnJP=w548-h318-n-k-no',
  },
  {
    title: 'Sada Pathor Bholaganj',
    image:
      'https://www.localguidesconnect.com/t5/image/serverpage/image-id/719138iA032BAB6558CC2F1?v=v2',
  },
  {
    title: 'Mayabi Waterfall',
    image:
      'https://adarbepari.com/wp-content/uploads/2016/07/songram-punji-jhorna-waterfall-jaflong-sylhet-06.jpg',
  },
]

export default function App() {
  return (
    <div className="main-container">
      <SliderComp
        autoplay={true}
        autoplaySpeed={3000}
        slideNum={2}
        data={data}
        label={'Travel'}
      />
    </div>
  )
}
