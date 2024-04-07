import Profile from "./Profile.gif";
import Button from "./Button.jsx";
function Card(){
return (<div className="card">
<img className="profile" src={Profile} alt="Profile"></img><h2 className="cardTitle">Quotes and Notes</h2><p className="cardPara">To create, you must lose fear of being wrong. Your art is about your heart liking your work, about how honest you are with yourself, and you must never trade honesty with creativity. Learn rules so that you can break them in arts. Creativity is intelligence having fun. There are no rules to creativity, they form afterwards.</p>
<Button />
</div>);
};

export default Card;
