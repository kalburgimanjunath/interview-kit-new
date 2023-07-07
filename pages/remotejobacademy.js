export default function RemoteJobAcademy() {
  const mainheading = `Feeling overwhelmed, frustrated and stuck in your search for a remote
  job?`;
  const list1 = [
    'Overwhelmed with all of the info and unsure where to start in your remote job search',

    'Feeling stuck in a company that doesn’t want you working remotely',

    'Confused as to which companies are truly 100% remote',

    'Dreaming of living somewhere else, but feeling trapped',

    'Frustrated with applying and getting rejected or ghosted',

    'Not feeling in control and restricted to how you live your life',

    'Feeling uninspired by the same four walls and craving the variety of working in new environments',

    'Struggling to find time to see friends/ family AND taking a break in your 2-3 weeks annual leave',

    'Dreading the thought of commuting',

    'Craving more flexibility with your schedule',
  ];
  const list2 = [
    'Learn what recruiters want to see in CVs and cover letters',

    'Make the most of your time by knowing where + how to network',

    'Learn how to get more interviews ',

    'Make your LinkedIn profile ‘pop’ and have recruiters reach out to you with relevant job offers',

    'Guidance navigating tax, visas and work rights, hassle-free',
  ];
  const list3 = [
    'Ongoing support to avoid negative thoughts creeping in',

    'Determine how to get genuine feedback and how to handle the feeling of rejection',

    'Reveal what hiring managers are REALLY asking in interviews and gain confidence to ask the right questions to WOW them',

    'Discover the tricks to highlight your strengths and articulate your value  ',
  ];
  const list4 = [
    'Get interviews at truly remote-first companies',

    'Land a job that fits your lifestyle',

    'Work from anywhere in the world and live the life you dream of!',
  ];
  return (
    <div>
      <h1 className="subtitle m-20">{mainheading}</h1>
      <h1 className="subtitle-2 m-20">Yes....</h1>
      <div className="m-20">
        <ul className="list-disc p-4">
          {list1 &&
            list1.map((item) => {
              return <li>{item}</li>;
            })}
        </ul>
        <h1 className="subtitle-2 m-20">Then… this is for you!</h1>
        <h1 className="subtitle-2 m-20">What you’ll get</h1>
        <h1 className="subtitle-2 m-20">Clarity</h1>
        <div className="font-bold text-xl m-20">
          <ul className="list-disc p-4">
            {list2 &&
              list2.map((item) => {
                return <li>{item}</li>;
              })}
          </ul>
        </div>
        <h1 className="subtitle-2 m-20">Confidence</h1>
        <ul className="list-disc p-4">
          {list3 &&
            list3.map((item) => {
              return <li>{item}</li>;
            })}
        </ul>
        <h1 className="subtitle-2 m-20">Results</h1>
        <ul className="list-disc p-4">
          {list4 &&
            list4.map((item) => {
              return <li>{item}</li>;
            })}
        </ul>
        <button type="button" className="primary">
          Join the consultation
        </button>
        <section>
          <h1 className="subtitle">These people changed their lives</h1>
        </section>
        <section>
          <h1 className="subtitle">What’s included?</h1>
          <p>
            The Remote Job Academy (RJA) is a step-by-step programme, designed
            by a recruiter, that will enable you to get a remote job much easier
            and faster than doing it alone.
          </p>
          <p>
            This proven system has helped hundreds of ‘Remote Rebels’ to get
            their ideal remote job!
          </p>
          <p>
            Using industry expertise and proven techniques, we will show you
            where to find 100% remote jobs, how to apply effectively and how to
            impress in interviews so that you get a fully remote job and have
            more freedom and flexibility.
          </p>
          <p>
            There are 3 packages to choose from depending on what YOU personally
            need to succeed.
          </p>
          <p className="subtitle">See what’s included below!</p>
        </section>
        <section>
          <h1 className="subtitle">FAQs</h1>
          <div>
            <p>
              <div>What kinds of jobs can I get?</div>
              There are too many to list!
            </p>
            <p>
              We’ve helped people get jobs in Tech, Marketing, Design, Customer
              Support, and Sales- the list is endless!
            </p>
            <p>
              Whether you’re just starting out in the world of remote work, or
              you’re looking for a career switch and unsure how to approach it-
              we’ll work together to uncover what jobs you can do according to
              your skills and what you enjoy.
            </p>
            <p>
              <div>Are you a recruiter?</div>
              Yes, I am a recruiter, however, Remote Rebellion doesn’t work like
              a recruitment agency. Instead of helping companies to hire- we
              help you to find a remote job. We do this by working with you to
              discover what it is you can/ want to do, how to find suitable
              roles and how to apply effectively so that you can land your dream
              remote job.
            </p>
            <p>
              <div>How long does the programme take to complete?</div>
              That depends.
            </p>
            <p>
              The whole programme has been designed for those who are working
              full time to be completed comfortably within 12 weeks.
            </p>
            <p>
              If you’re not working, you could complete the online course in 2-4
              weeks.
            </p>
            <p>
              As a guideline, you should dedicate at least 5 hours a week to
              this programme in order to achieve great results. The more you put
              into it, the more you’ll get out!
              <p>
                <div>My job cannot be done remotely, can you still help?</div>
                For sure! A lot of people join RR having never worked remotely
                before. The Remote Job Academy is a perfect place to learn what
                jobs you can do remotely and how to use your past experience to
                show employers why you'd be a great fit.
              </p>
              <p>
                <div>What fields/industries do you specialise in?</div>
                Our specialism is finding you a fully remote job that you enjoy
                and that gives you freedom and flexibility.
              </p>
              <p>
                Most rebels come to us because they want to work in an industry
                or position that has a positive impact on the world.
              </p>
              <p>
                <div>Do you focus on a particular country or region?</div>
                Whilst most of Michelle’s network is European, she has
                connections across Asia, North America and Australia. That
                doesn’t mean if you’re in Africa or South America that we can’t
                help you. The beauty of remote work means that no matter where
                you’re based now or where you want to work from, we can help
                you!
              </p>
              <p>
                <div>How long will it take until I get a remote job?</div>
                That really depends. Some clients got job offers within the
                first few weeks after just a handful of applications. For
                others, it took a few months. There are so many variables such
                as your experience, the industries targeting, the market and
                economy, your preferences and non-negotiables and of course how
                much work you put into this too!
              </p>
              <p>
                <div>Can you guarantee that I will get a job?</div>
                Afraid not.
              </p>
              <p>
                But hey, even the best coach in the world cannot guarantee an
                athlete will win a gold medal.
              </p>
              <p>
                We can assure you that you’ll have a much better chance of
                landing a remote job by working with us than on your own. Plus,
                we’ll be sure to make the process fun and avoid you having to go
                through so much effort the next time you want a new remote job!
              </p>
              <p>
                <div>Can I pay after I get a job?</div>
                For the same reason that personal trainers don’t take payment
                after you reach your body/fitness goals, we don’t either.
              </p>
              <p>
                No matter how much information, resources, guidance and support
                we offer, we cannot be present in your interviews.
              </p>
              <p>
                If you’re willing to put in the work, then we’re confident that
                you’ll get results with the Remote Job Academy.
              </p>
              <p>
                We're so confident, in fact, that we offer a money-back
                guarantee if you're not satisfied.
              </p>
              <p>
                <div>Can I get a refund?</div>
                Absolutely!{' '}
              </p>
              <p>
                And you know what? We’re so confident that we offer a full
                money-back guarantee* to ease any pre-purchase jitters.
              </p>
              <p>
                Though we can’t promise you’ll instantly land a remote job, we
                guarantee you’ll be satisfied with what you'll learn.
              </p>
              <p>
                That’s because this programme is jam-packed with Michelle’s
                insights from working 9+ years in recruitment and 5+ years as a
                remote employee herself, helping countless others like you to
                land remote jobs.
              </p>
              <p>One thing is certain:</p>
              <p>
                High-quality video training, action guides, resources, guidance
                and ongoing support, combined with a dash of time and effort
                lead to amazing remote job opportunities.
              </p>
              <p>
                And if you complete the first 5 modules, attend at least 2
                calls, and you’re not completely satisfied, you can get a full
                refund within 14 days of your purchase.
              </p>
              <p>But we have a feeling you might not be needing it.</p>
              <p>*This is for the Community and Premium packages only.</p>
              <p>
                <div>
                  <a href="./freeguide">Ready to make the world your office?</a>
                </div>
              </p>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
