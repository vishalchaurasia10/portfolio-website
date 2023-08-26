import Intro from "@/components/Content/Intro";
import CustomHead from "@/components/Layout/CustomHead";
import Transition from "@/components/Layout/Transition";

export default function Home() {
  return (
    <>
      <CustomHead title='Vishal Chaurasia' description='Welcome to the portfolio of Vishal Chaurasia. Explore my projects and skills' />
      <Transition />
      <Intro />
    </>
  )
}
