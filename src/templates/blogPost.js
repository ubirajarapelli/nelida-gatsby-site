import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SharePost from '../components/SharePost'
import Subscribe from '../components/Subscribe'
import PrevNextPosts from '../components/PrevNextPosts'
import Categories from '../components/Categories'

const BlogPost = ({ data, pageContext }) => {
  const { frontmatter: { title, date }, html} = data.markdownRemark

  return (
  <Layout>
  <SEO title="Blog" />
  <section class="section-50 section-sm-bottom-70 section-lg-bottom-120">
    <div class="container">
      <div class="row row-20">
        <div class="col-xl-8 col-xxl-9">
          <div class="inset-xl-right-45 inset-xxl-right-0">
            <article class="news-post">
              <div class="news-post-header"><img class="img-responsive" src="images/news-01-1280x506.jpg" alt="" width="1280" height="506"/>
              </div>
              <div class="news-post-body">
                <h2>{title}</h2>
                <ul class="list-inline">
                  <li><a class="text-info h6 text-regular" href="#">
                      <time dateTime={date}>{date}</time></a></li>
                  <li>
                    <p class="h6 text-regular text-content">by	<a class="text-content" href="#">admin</a>
                    </p>
                  </li>
                  <li><a class="text-info h6 text-regular" href="#"><span class="icon material-icons-chat_bubble_outline"></span>	3 comment(s)</a></li>
                </ul>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                {/*<p>Just recently a Texas municipal court judge had fined a woman $1,590 for a decal on her car license plate being missing… Though just a few days after, she has obviously changed her mind about the penalty and its amount.</p>
                <p>The Atlanta Journal-Constitution last week reported on the plight of 52-year-old Fulton County resident Linda Ford and what the paper described as an “outlandish” fine that had been imposed by Grantville Municipal Court Judge Lisa R. Reeves. The woman repeatedly tried to pay the fine at once, but she just missed a deadline…</p>
                <p>Ms. Ford’s troubles began last fall…</p>
                <p>It was then, when on an unfortunate occasion she’s been driving past the local police department building, as the Grantville, TX police officer pulled her over.</p>
                <h5>According to the journalists, that’s what happened next:</h5>
                <p>She’s been driving to the local church’s yard sale, where she intended to raise some money for homeless women of Grantville.</p>
                <p>While she passed the police building, the officer pulled her over, he said, because her license plate cover had too much tint.</p>
                <p>Despite the fact that it was the dirt — not tinting — blown from the car’s exhaust that made it difficult to read her plate, the officer didn’t bother to mind it.</p>
                <p>It was then, when on an unfortunate occasion she’s been driving past the local police department building, as the Grantville, TX police officer pulled her over.</p>
                <p>And that was then when the story began to become eerie…</p>*/}
              </div>
              {/*<div class="news-post-header"><img class="img-responsive" src="images/typography-02-1280x853.jpg" alt="" width="1280" height="853"/></div>*/}
              {/*<div class="news-post-body">
                <p>Though Ms. Ford had documents on her, showing that her vehicle registratio was valid and up-to-date, she’s been hit with a $720 fine that increased to $1,590 when she missed a payment deadline for the first time.</p>
                <blockquote class="quote quote-default">
                  <q class="h3">Ms. Ford told the newspaper that she’s still bothered by the whole episode. “Even though they dismissed it, I still feel dirty. … I still feel like a criminal,” she said.</q>
                </blockquote>
                <p>The Fairburn, TX., dweller, her colleague, who works as a baggage handler had confirmed to the judge at a hearing that she didn’t have enough money to pay it.</p>
                <h5>In a miraculous manner, the next day a report emerged, that after hearing those arguments Judge Reeves cancelled the fine this week. It’s not offcially known yet what triggered the judge’s decision. Law Blog has reached out to Judge Reeves for comment.</h5>
                <h5>Ms. Ford told the newspaper that she’s still bothered by the whole episode. “Even though they dismissed it, I still feel dirty. … I still feel like a criminal,” she said.</h5>
              </div>*/}
              {/*<div class="news-post-header"><img class="img-responsive" src="images/static-elements-10-1280x835.jpg" alt="" width="1280" height="835"/>
            </div>*/}
              <div class="news-post-body">
                {/*<p>Despite the fact, that Ms. Ford’s fine have been dismissed by a presumably kind-hearted judge, her story is by far not a one-off…</p>
                <p>Over the last 10 years, hundreds of reports about way overvalued fines for smallest misdemeanors or municipal rules breaching have been reported…</p>
                <p>Nationwide there happens to be an average of 2 such fines per each 1000 of residents of any state, which in total accounts to almost 0,2% of the US population…</p>
                <p>That kind of math shows, that while on one hand our police officers are doing a massive job on noticing the smallest issues and law breaches, on the other, the system looks a bit broken…</p>
                <p>Mind that:</p>
                <ul class="list text-primary font-italic list-ordered">
                  <li>
                    Ms. Ford is just one of the half of all fine recipients for similar breaches, who just cannot possibly afford herself to pay the fine at once.And the postponing services, that exist and allow you to pay a fine at a later date, do hike the end size of the fine by … times!</li>
                  <li>The fact that our law enforcers are wasting their time on the issues which are not of a primary citizen’s concern is a bit worrying…</li>
                </ul>
                <p>All in all, our Houston-based law firm will be glad to inform you of any further developments for this story and help anyone who’ve found himself or herself entangled within this rotten system of minor fines and fees…</p>*/}
                <div className="d-sm-flex align-items-sm-center offset-top-30 justify-content-sm-center justify-content-lg-start">
                  <SharePost />
                </div>
                <PrevNextPosts data={pageContext} />
              </div>
              <div class="news-post-written">
                <div class="unit flex-column flex-lg-row align-items-lg-center unit-spacing-xl">
                  <div class="unit-left"><img class="rounded-circle" src="images/post-01-172x172.png" width="172" height="172" alt="" /></div>
                  <div class="unit-body">
                    <h5 class="text-regular">Written by	<a href="#">admin</a>
                    </h5>
                    <p>I am a professional blogger interested in everything taking place in cyberspace. I am running this website and try my best to make it a better place to visit. I post only the articles that are related to the topic and thoroughly analyze all visitors’ comments to cater to their needs better.</p>
                  </div>
                </div>
              </div>
              {/*<div class="news-post-body news-post-body-md">
                <h4 class="font-weight-bold">3 Responses</h4>
              </div>*/}
              {/*<div class="news-post-comments">
                <div class="unit flex-column flex-md-row align-items-md-center unit-spacing-xl">
                  <div class="unit-left">
                    <div class="replay"><a class="material-icons-reply" href="#"></a></div><img class="rounded-circle" src="images/post-01-172x172.png" width="172" height="172" alt="" />
                  </div>
                  <div class="unit-body">
                    <h6 class="text-regular"><a class="font-italic" href="#">
                        <time datetime="2016">May 30, 2016</time></a><span class="text-content preffix-left-15">Posted by	<span class="font-italic">admin</span></span></h6>
                    <p>This is why I’m not driving a car, and to be fair, I think it’s a lot safer.</p>
                  </div>
                </div>
              </div>
              <div class="news-post-comments">
                <div class="unit flex-column flex-md-row align-items-md-center unit-spacing-xl">
                  <div class="unit-left">
                    <div class="replay"><a class="material-icons-reply" href="#"></a></div><img class="rounded-circle" src="images/post-01-172x172.png" width="172" height="172" alt="" />
                  </div>
                  <div class="unit-body">
                    <h6 class="text-regular"><a class="font-italic" href="#">
                        <time dateTime="2016">Jun 23, 2016</time></a><span class="text-content preffix-left-15">Posted by	<span class="font-italic">admin</span></span></h6>
                    <p>Even if you are not driving a car, one day you may be fined for something.</p>
                  </div>
                </div>
              </div>
              <div class="news-post-comments">
                <div class="unit flex-column flex-md-row align-items-md-center unit-spacing-xl">
                  <div class="unit-left">
                    <div class="replay"><a class="material-icons-reply" href="#"></a></div><img class="rounded-circle" src="images/post-01-172x172.png" width="172" height="172" alt="" />
                  </div>
                  <div class="unit-body">
                    <h6 class="text-regular"><a class="font-italic" href="#">
                        <time datetime="2016">Jun 23, 2016</time></a><span class="text-content preffix-left-15">Posted by	<span class="font-italic">admin</span></span></h6>
                    <p>Very informative article. Thanks for sharing!</p>
                  </div>
                </div>
              </div>*/}
              {/*<div class="news-post-body">
                <h4 class="font-weight-bold">Leave a Reply</h4>
                <p class="offset-top-15">Your email address will not be published. Required fields are marked *</p>

                <form class="rd-mailform text-left offset-top-20 rd-replay" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                  <div class="form-wrap">
                    <label class="form-label" for="contact-message">Comments *</label>
                    <textarea class="form-input" id="contact-message" name="message" data-constraints="@Required"></textarea>
                  </div>
                  <div class="form-wrap">
                    <label class="form-label" for="contact-name">Your name *</label>
                    <input class="form-input" id="contact-name" type="text" name="name" data-constraints="@Required" />
                  </div>
                  <div class="form-wrap">
                    <label class="form-label" for="contact-email-form">Your e-mail *</label>
                    <input class="form-input" id="contact-email-form" type="email" name="email" data-constraints="@Email @Required" />
                  </div>
                  <div class="form-wrap">
                    <label class="form-label" for="contact-website">Your website *</label>
                    <input class="form-input" id="contact-website" type="text" name="website" data-constraints="@Required" />
                  </div>
                  <button class="btn btn-primary" type="submit">submit comment</button>
                </form>
              </div>*/}
            </article>
          </div>
        </div>
        <div class="col-xl-4 col-xxl-3">
          <div class="row justify-content-md-center offset-top-0">
            <div class="col-md-10 col-lg-12 col-sm-12">
              <div class="row">
                <div class="col-lg-6 col-xl-12 col-sm-12">
                  <Subscribe />
                </div>
                {/* <div class="col-lg-6 col-xl-12 col-sm-12">
                  <hr class="divider-lg d-lg-none d-xl-block" />
                  <h4 class="font-weight-bold">Legal insights</h4>
                  <article class="post text-left">
                    <div class="unit flex-row unit-spacing-xs">
                      <div class="unit-left"><img src="images/typography-03-130x136.jpg" alt="" width="130" height="136"/>
                      </div>
                      <div class="unit-body"><a class="text-darker" href="post-standard.html">Can you be fined with $1600 for missing a license plate decal?</a>
                        <div class="post-meta">
                          <time datetime="2016-08-12">18.05.2016</time>
                        </div>
                      </div>
                    </div>
                    <p>Just recently a Texas municipal court judge had fined a woman $1,590 for a decal on her car license plate being missing… Though just a few days after, she has…</p>
                  </article>
                  <article class="post text-left">
                    <div class="unit flex-row unit-spacing-xs">
                      <div class="unit-left"><img src="images/typography-04-130x136.jpg" alt="" width="130" height="136"/>
                      </div>
                      <div class="unit-body"><a class="text-darker" href="post-standard.html">2016 Texas businesses and private employment law update</a>
                        <div class="post-meta">
                          <time datetime="2016-08-12">17.05.2016</time>
                        </div>
                      </div>
                    </div>
                    <p>Just recently a Texas municipal court judge had fined a woman $1,590 for a decal on her car license plate being missing… Though just a few days after, she has…</p>
                  </article>
                  <article class="post text-left">
                    <div class="unit flex-row unit-spacing-xs">
                      <div class="unit-left"><img src="images/typography-05-130x136.jpg" alt="" width="130" height="136"/>
                      </div>
                      <div class="unit-body"><a class="text-darker" href="post-standard.html">What the federal legal consequences of Florida’s shooting will be?</a>
                        <div class="post-meta">
                          <time datetime="2016-08-12">17.05.2016</time>
                        </div>
                      </div>
                    </div>
                    <p>Just recently a Texas municipal court judge had fined a woman $1,590 for a decal on her car license plate being missing… Though just a few days after, she has…</p>
                  </article>
                </div> */}
                {/* <div class="col-lg-6 col-xl-12 col-sm-12">
                  <hr class="divider-lg" />
                  <h4 class="font-weight-bold">Quotes on Law in Our Society</h4>
                  <blockquote class="quote quote-default quote-default-small">
                    <q class="h4">At his best, man is the noblest of all animals; separated from law and justice he is the worst.</q>
                    <cite class="h6 text-lg-right">— Aristotle</cite>
                  </blockquote>
                </div> */}
                <div class="col-lg-6 col-xl-12 col-sm-12">
                  <hr class="divider-lg" />
                  <Categories />
                  {/* <h4 class="font-weight-bold">Categories</h4>
                  <ul class="list text-primary font-italic text-left">
                    <li><a href="#"> Construction Law & Litigation</a></li>
                    <li><a href="#"> Family Law</a></li>
                    <li><a href="#"> Intellectual property</a></li>
                    <li><a href="#"> Labor & Employment Laws</a></li>
                    <li><a href="#"> Liability Litigation</a></li>
                    <li><a href="#"> Maritime Law</a></li>
                    <li><a href="#"> Medical Malpractice</a></li>
                    <li><a href="#"> Mergers & Acquisitions</a></li>
                    <li><a href="#"> Tips for Business Litigation</a></li>
                    <li><a href="#"> USERRA</a></li>
                  </ul> */}
                </div>
                {/* <div class="col-lg-6 col-xl-12 col-sm-12">
                  <hr class="divider-lg" />
                  <h4 class="font-weight-bold">Archives</h4>
                  <ul class="list text-primary font-italic text-left">
                    <li><a href="#"> June 2016</a></li>
                    <li><a href="#"> May 2016</a></li>
                    <li><a href="#"> April 2016</a></li>
                  </ul>
                </div> */}
                {/* <div class="col-lg-6 col-xl-12 col-sm-12">
                  <hr class="divider-lg" />
                  <h4 class="font-weight-bold">Calendar</h4>

                  <div class="rd-calendar">
                    <div class="rdc-panel">
                      <div class="rdc-month"></div>
                      <div class="rdc-fullyear"></div>
                      <div class="rdc-prev"></div>
                      <div class="rdc-next"></div>
                    </div>
                    <div class="rdc-table"></div>
                  </div>
                </div> */}
                {/* <div class="col-lg-6 col-xl-12 col-sm-12">
                  <hr class="divider-lg" />
                  <h4 class="font-weight-bold">Recent Comments</h4>
                  <ul class="list list-xl comments">
                    <li>
                      <p class="font-italic">admin on</p><a class="h5 text-regular" href="post-standard.html">What the federal legal consequences of Florida’s shooting will be?</a>
                    </li>
                    <li>
                      <p class="font-italic">admin on</p><a class="h5 text-regular" href="post-standard.html">What the federal legal consequences of Florida’s shooting will be?</a>
                    </li>
                    <li>
                      <p class="font-italic">admin on</p><a class="h5 text-regular" href="post-standard.html">What the federal legal consequences of Florida’s shooting will be?</a>
                    </li>
                    <li>
                      <p class="font-italic">admin on</p><a class="h5 text-regular" href="post-standard.html">What the federal legal consequences of Florida’s shooting will be?</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD MMM YYYY")
      }
      html
    }
  }`

export default BlogPost
