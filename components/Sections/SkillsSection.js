import CoreFeature from "../Cards/CoreFeatureCard";
import Feature from "../Cards/FeatureCard";


export default function Skills() {

    return(
        <div className=" mx-3 my-24 p-8 bg-[#031B34] lg:mx-16">
            <div className="max-w-[700px]">
                <CoreFeature title="Why you should partner with me?" text="Whether you need a highly responsive or a mobile-friendly website for your business, want to get a customized e-commerce site built for your online store, or looking to re-design your old website, Content Development Pros can provide you the best all-inclusive web design and development services." />
            </div>
            <div className="flex items-center my-16">
                <h1 className="text-2xl font-bold max-w-[510px] bg-gradient-to-l from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent">What can I do for you?</h1>
            </div>
            <div className="lg:flex lg:flex-row mt-8">
                <Feature title="Front-end Development" text="Mobile responsiveness, user experience, and search engine optimization should be the key priorities when developing the front-end of your business website. The technologies that I primarily use for front-end development are React, Next.js, and Tailwind Css. React and Tailwind provide beautiful style and user interface features while Next.js provides what is called server side rendering. Server side rendering increases loading speeds and as well as it makes your application more accessible to search bots which will increase your ranking in search results." />
                <Feature title="Back-end Development" text="Back-end development is everything that the users don't see, and contains the behind-the-scenes activities that occur when performing an action on a website. These functions can include connecting to third party APIs, interacting with databases, and back-end logic. Even though these actions can not be seen by the user, they are equally, if not more important than what is shown in the browser. The technologies that I primarily use on the back end are Node.js, either Firebase or MongoDb for the database, and Stripe for payment processing." />
                <Feature title="Updates and Scaling" text="Scalability is essential in that it contributes to competitiveness, efficiency, reputation and quality. Small businesses must be particularly mindful of scalability because they have the largest growth potential, and need to maximize the return of their resources. Your applications must be able to grow and expand as your business does to be able to efficiently adjust to an increase of traffic, revenue, and needs of the business. This is why you have to be careful with using a template builder for your online business needs. They are great for small projects, but they are very limited for business purposes." />
            </div>
        </div>
    )
}