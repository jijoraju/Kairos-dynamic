$(document).ready(function () {
  let bannerCards = blogs
    .filter((item) => item.tag == "editors-pick")
    .map((blog) => bannerCard(blog));
  $("#banner-slider").append(bannerCards);

  $("#banner-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    fade: true,
    cssEase: "linear",
  });

  let trendingCards = blogs
    .filter((item) => item.tag == "trending")
    .map((blog) => trendingCard(blog));

  $("#trending .row").append(trendingCards);

  let editors_picks = blogs
    .filter((item) => item.tag == "editors-pick")
    .map((blog) => editors_pick_card(blog));

  $("#editors-pick .row .w-6 .row").append(editors_picks.slice(0, 3));

  $("#editors-pick .row .w-4 .row").append(
    editors_picks.slice(4, editors_picks.length)
  );
});

let bannerCard = (blog) => {
  return `
        <div class="card bg-light">
            <div class="row" style="height:100%">
                <div class="column">
                    <img
                    src="img/${blog.image}"
                    alt="Beans on a table"
                    class="img-flexible" />
                </div>
                <div class="column">
                    <div class="card-body flex">
                    <p class="caption">Editor's Pick</p>
                    <a href="/blogs">
                        <h2>${blog.heading}</h2>
                    </a>
                    <p class="content">
                        ${blog.content}
                    </p>
                    <div class="post-meta">
                        <p>
                        ${blog.postMeta.date} | ${blog.postMeta.author} |
                        <img
                            src="img/icons/post-view.svg"
                            alt="post view"
                            class="post-view-icon" />
                        ${blog.postMeta.views}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>`;
};

let trendingCard = (blog) => {
  return `
    <div class="card">
        <div class="card-body flex">
            <a href="/blogs">
                <h4>
                ${blog.heading}
                </h4>
            </a>
            <p class="content txt-muted">
                ${blog.content}
            </p>
            <div class="post-meta">
                <p>
                ${blog.postMeta.date} | ${blog.postMeta.author} |
                <img
                    src="img/icons/post-view.svg"
                    alt="post view"
                    class="post-view-icon" />
                ${blog.postMeta.views}
                </p>
            </div>
        </div>
    </div>
    `;
};

let editors_pick_card = (blog) => {
  return `
    <div class="card">
        <img
        src="img/${blog.image}"
        alt="Morning coffee"
        class="img-flexible" />
        <div class="card-body flex">
            <a href="/blogs">
                <h2>
                ${blog.heading}
                </h2>
            </a>
            <p class="content txt-muted">
                ${blog.content}
            </p>
            <div class="post-meta">
                <p>
                ${blog.postMeta.date} | ${blog.postMeta.author} |
                <img
                    src="img/icons/post-view.svg"
                    alt="post view"
                    class="post-view-icon" />
                ${blog.postMeta.views}
                </p>
            </div>
        </div>
    </div>`;
};

var blogs = [
  {
    id: 1,
    image: "/banner1.jpg",
    heading: "Coffee Beans 101: How to Choose Which to Use",
    content:
      "What would we do if we didn't have coffee? How would we survive the day without them? this delectable beverage? The reality is, whether we like it or not, admit it or not, the aroma and flavour of this delicious drink entice us to get out of bed and start our day",
    postMeta: {
      date: "December 23, 2022",
      author: "Anjelina",
      views: "2.5M",
    },
    tag: "editors-pick",
  },
  {
    id: 2,
    image: "/banner2.jpg",
    heading: "Coffee Beans 101: How to Choose Which to Use",
    content: `What would we do if we didn't have coffee? How would we survive the 
      day without them? this delectable beverage? The reality is, whether 
      we like it or not, admit it or not, the aroma and flavour of this delicious 
      drink entice us to get out of bed and start our day`,
    postMeta: {
      date: "December 23, 2022",
      author: "Anjelina",
      views: "2.5M",
    },
    tag: "editors-pick",
  },

  {
    id: 3,
    image: "",
    heading:
      "What Exactly Is Peaberry Coffee? Learn More About This Exotic Coffee Bean",
    content: `This naturally occurring mutation in Arabica and Robusta
                      coffee varietals, also known as caracol (Spanish for
                      snail), develops with just one bean (or seed) within the
                      coffee cherry instead of two.`,
    postMeta: {
      date: "December 14, 2020",
      author: "Stones",
      views: "180k",
    },
    tag: "trending",
  },
  {
    id: 4,
    image: "",
    heading: `The Top Six Technology Trends Changing the Coffee
                        Industry`,
    content: `Coffee is one of the most popular and widely consumed
                      basic items on the planet. The enormous manufacturing
                      industry is constantly looking for innovative methods to
                      improve food quality.`,
    postMeta: {
      date: "December 02, 2020",
      author: "Stones",
      views: "200k",
    },
    tag: "trending",
  },
  {
    id: 5,
    image: "",
    heading: `11 Coffee Filter Alternatives`,
    content: ` Many of us begin our days with a cup of much-needed
                      coffee. We feel the warmth of the mug in our hands as we
                      watch the steam rising from the cup. We drink the nutty,
                      somewhat bitter tea and feel our brain rev up.`,
    postMeta: {
      date: "November 14, 2022",
      author: "Jessie",
      views: "1.8M",
    },
    tag: "trending",
  },
  {
    id: 6,
    image: "",
    heading: `The Best Ways to Make Luxurious Coffee at Home`,
    content: `When it comes to a good cup of coffee, everyone has their
                      favourite cafés and go-to coffee shops, but knowing how to
                      brew your own at home might be a life-changing skill for
                      those days when you're stuck at home or simply too busy to
                      get to your favourite coffee shop.`,
    postMeta: {
      date: "December 01, 2022",
      author: "Mike",
      views: "1.2M",
    },
    tag: "trending",
  },
  {
    id: 6,
    image: "morning coffe.jpg",
    heading: `6 Ways to Improve the Taste of Your Morning Coffee`,
    content: `It is undeniably true that a morning does not begin
                    until you have had your coffee. Coffee is the magical
                    morning potion for many of us—something that hasn't
                    and won't change throughout time. It's ingrained in
                    many different nations' customs and heritage. If
                    coffee were a language, we're guessing that by now,
                    more than half of the universe would be speaking the
                    same language, albeit with distinct accents.`,
    postMeta: {
      date: "November 14, 2021",
      author: "Jack",
      views: "200k",
    },
    tag: "editors-pick",
  },
  {
    id: 7,
    image: "turkish_coffee.jpg",
    heading: `Is Turkish coffee keto-friendly?`,
    content: `Coffee is a popular beverage in many regions of the
                          world. Coffee is the key to staying attentive, whether
                          you want to relax with a book in your favourite
                          recliner or are pouring over papers to prepare for an
                          exam.`,
    postMeta: {
      date: "March 28, 2022",
      author: "Yohan",
      views: "150k",
    },
    tag: "editors-pick",
  },
  {
    id: 8,
    image: "coffee_vs_tea.jpg",
    heading: `Coffee versus Tea! Which is the healthier option?`,
    content: `Tea and coffee are two liquids that are enjoyed by
                          billions of people worldwide. These beverages are
                          all-natural and provide several health advantages. Tea
                          and coffee can be eaten in the morning, after dinner,
                          or at any time in between meals.`,
    postMeta: {
      date: "January 11, 2020",
      author: "George",
      views: "1M",
    },
    tag: "editors-pick",
  },
  {
    id: 9,
    image: "best_coffee_home.jpg",
    heading: `Key Factors in Making the Best Coffee at Home?`,
    content: `Hundreds of millions of pounds of coffee are farmed,
                          bagged, and sent each year to food companies who
                          package their specific mixes for the shelves of your
                          local cafe or grocery store.`,
    postMeta: {
      date: "March 23, 2022",
      author: "Jude",
      views: "450k",
    },
    tag: "editors-pick",
  },
  {
    id: 10,
    image: "white_coffee.jpg",
    heading: `What exactly is White Coffee?`,
    content: `The word appears straightforward: white coffee.
                          However, depending on where you inquire or who you
                          question, the answer to "What is white coffee?" might
                          vary.`,
    postMeta: {
      date: "January 14, 2022",
      author: "John",
      views: "2M",
    },
    tag: "editors-pick",
  },
];
