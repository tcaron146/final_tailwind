import React from 'react'
import Content from '../components/Content'
import beef from "../../public/athas.jpg"
import stew from "../../public/pho.jpg";

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
      <Content 
      imageSrc={stew}
      altText="oxtail"
      paragraphText="Here is the craziest oxtail I've ever consumed. This was the first time I had ever had oxtail and it was incredible, it has a suimialr flavor to your normal beef stew if you just use a roast but it has a very buttery flavor and a crazy melt in your mouth tenderness.this stew is from the Old Cunucu house in Aruba and if you ever visit absolutely check it out. I was surrounded by cats and dogs in an outdoor setting and in another posting you will see the Iguana stew, which was also very good."
      className="my-custom-class"
      Item="Oxtail Stew"
      />
    </div>
  )
}

export default Page