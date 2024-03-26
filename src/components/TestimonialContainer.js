import { useMemo } from "react";
import "./TestimonialContainer.css";

const TestimonialContainer = ({ propTop }) => {
  const testimonialStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="testimonial" style={testimonialStyle}>
      <div className="frame-parent45">
        <div className="frame-parent46">
          <div className="frame-parent47">
            <div className="line-parent">
              <div className="line-div" />
              <div className="testimonial1">TESTIMONIAL</div>
            </div>
            <div className="what-they-say-parent">
              <b className="what-they-say">What They Say?</b>
              <div className="eduyou-has-got">
                EduYou has got more than 100k positive ratings from our users
                around the world. Some of the students and teachers were greatly
                helped by the LearnEase.
              </div>
            </div>
          </div>
          <div className="are-you-too">
            Are you too? Please give your assessment
          </div>
        </div>
        <div className="frame-wrapper44">
          <div className="buat-pesanmu-parent">
            <div className="buat-pesanmu">Buat pesanmu</div>
            <img
              className="send-svgrepocom-icon"
              alt=""
              src="/send-svgrepocom.svg"
            />
          </div>
        </div>
      </div>
      <img className="mask-group-icon8" alt="" src="/mask-group6@2x.png" />
      <div className="testimonial-child" />
      <div className="testimonial-item" />
      <div className="frame-parent48">
        <div className="line-group">
          <div className="frame-child75" />
          <div className="thank-you-so">
            "Thank you so much for your help. It's exactly what I've been
            looking for. You won't regret it. It really saves me time and
            effort. LearnEase is exactly what our business has been lacking."
          </div>
        </div>
        <div className="gloria-rose-parent">
          <div className="gloria-rose">Gloria Rose</div>
          <div className="frame-parent49">
            <div className="star-parent4">
              <img className="frame-child76" alt="" src="/star-1.svg" />
              <img className="frame-child77" alt="" src="/star-2.svg" />
              <img className="frame-child78" alt="" src="/star-3.svg" />
              <img className="frame-child79" alt="" src="/star-4.svg" />
              <img className="frame-child80" alt="" src="/star-5.svg" />
            </div>
            <div className="reviews-at-yelp">12 reviews at Yelp</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContainer;
