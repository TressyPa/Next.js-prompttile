import Feed from "@components/Feed";



const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>

    </h1>
    <p className="desc text-center">
        Prompttile is an open-source AI prompting tool where 
        you can generate high quality, engaging and creative prompts.
    </p>
        <Feed />
    </section>
  )
}

export default Home