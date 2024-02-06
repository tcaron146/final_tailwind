import React from 'react'
import Content from '../components/Content'
import beef from "../../public/athas.jpg"

const Page = () => {
  return (
    <div className='p-4'>
      <Content 
      imageSrc={beef}
      altText="athas roast beef"
      paragraphText="This is my gold standard in roast beef sandwiches, specifically the Athas Super Beef three way(mayo, cheese, and bbq sauce, I know it sounds appauling but its an incredible combonation). What it is comprised of is a large pile of perfectly cooked and shredded roast beef on a toasted roll(onion roll on a super beef and a regular burger bun for a junior beef, some have a sesame bun for a regular sized beef), its paired with a slice of american cheese on the bottom bun a good solid helping of james river barbecue sauce and a swipe of mayo on the top bun. What this creates is a one of my favorite sandwiches of all time."
      className="my-custom-class"
      Item="Athas Roast Beef Three Way"
      />
    </div>
  )
}

export default Page