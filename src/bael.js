import React from 'react';
import styled from 'styled-components'
import BaelCard from './baelcard';
import './bael.css';
import Nav from './nav';

const StyledHeader = styled.header`
background-color: #000000;
min-height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid #197278;

@media only screen and (max-width : 460px)  {
  min-height: 15vh;
  margin-bottom: .5rem;
};
`;

const StyledTitle = styled.h1`
font-size: 4.5rem;
font-family: Bebas Neue;
color: #197278;
text-decoration: none;
letter-spacing: rem;
margin-top: 1rem;
transition: 1s ease-in-out;
&:hover,
&:focus {
    transform: rotate(3deg);
}

@media only screen and (max-width : 460px)  {
  font-size: 2.5rem;
  margin-bottom: 3.75rem;
  margin-top: 2px;
};
`;

const StyledSubtitle = styled.h2`
font-size: 2rem;
font-style: italic;
font-family: Kristi;
color: white;
margin-top: -4.5rem;
margin-left: 20rem;
letter-spacing: 2px;

@media only screen and (max-width : 460px)  {
  font-size: 1.25rem;
  margin-left: 4rem;
};
`;


const StyledFooter = styled.footer`
background-color: #000000;
min-height: 15vh;
border-top: 2px solid #197278;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width : 460px)  {
  text-align: center;
  min-height: 10vh;
 };
`;

const StyledFooterSpan1 = styled.span`
font-size: 1.75rem;
font-family: Bebas Neue;
color: white;
letter-spacing: 2px;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
  margin-bottom: .5rem;
  margin-top: -1rem;
};
`;

const StyledFooterSpan2 = styled.span`
font-size: 2rem;
font-family: Pacifico;
color: #197278;
letter-spacing: 2px;
margin-top: -12px;
margin-bottom:-1rem;

@media only screen and (max-width : 460px)  {
  font-size: 1rem;
 };
`;


export default class Bael extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <div className='bael-page-div'>
      <StyledHeader>
        <StyledTitle>The Outsiders</StyledTitle>
        <StyledSubtitle>Ebixia's most wanted heros</StyledSubtitle>
        <Nav />
      </StyledHeader>

       <div className='bael-body'>
        <BaelCard 
         title="Bael Volet"
         subtitle="it stings, like a papercut."
         info="Not sure what I should say, exactly. I'm Bael Volet. I'm from…well, I was actually born somewhere on the road between Ellinia and New Ordis, but I was raised primarily in Ternathus. I was raised by my father, Bae'drin Volet, and also by my mother, Serwyn Ka'gin. I don't want to talk about them too much, but if either of you are reading this, I want you to know I'm sorry. I have never been the child I should have been, and you both deserved far better than I gave. From an early age I had an interest in all sorts of things fantastical, and learned everything I could about arcane magic. Growing up in the shadow of the Arcane Academy (and with a father who sells goods to them) will do that to you I suppose. I'd intended on studying at said academy and becoming a wizard (or a sorcerer, or a druid…or a dragon - I wasn't very picky, so long as it was a big and impressive job). That, as you may have guessed, didn't exactly pan out for me, but those early years set the stage for what would later become my occupation, I suppose."
        />

        <BaelCard 
         title="wild and free"
         subtitle="like the ocean tempest"
         info={`Let's not get too hasty! I know freedom and adventure sound like exactly the sort of thing to aspire toward, but often they come with unexpected side effects. Fast-forwarding a bit, for a time I was a pirate. The less said about those circumstances, I think, the better. But, speaking very broadly, I spent a couple decades sailing the seas and, after a certain point, making whatever decisions I wanted. It turns out, what I thought I wanted at the time wasn't what my heart and soul really needed. I was filling up on junk food, basically. I could have anything my heart desired, but that very fact made it harder for me to understand what my heart needed. That the urges we have, the quick and easy satisfaction of greed, envy, or lust, don't actually bring us any closer to true happiness when they're fulfilled. There are very few things I would change about my path - it's brought into my life meaning, purpose, kinship, and love - but I wouldn't recommend anyone use me as the example of how best to be “free”.`}
        />
       </div>

       <div className='bael-body'>
        <BaelCard 
         title="Didn't I use to be..."
         subtitle="a scary pirate?"
         info="I know it's hard to believe from my waifish appearance and silly accent, but I had my time as a terror of the sea. To anyone thinking about signing on, I've got a few words of advice for you. Piracy isn't all it's cracked up to be - many of the worst people you can imagine are attracted to a lifestyle where they aren't bound by moral codes or social conventions. You won't always be on the giving end of the punishment, I can tell you that. Also, most of the pirates I've seen since joining up with The Outsiders have met with some unfortunate ends. Some had their ships burned to cinder, some got beguiled and then be-thwacked over the head by some expertly crafted shadow magic, and some visited Cape Cold. I know it can be tempting, thinking you can just set to the seas and carve your own fortune, but maybe start with something within the law. The Adventurer's Guild usually has work! There's so much awful stuff in the world - if we all start thinking more about how to make Ebixia a better place, and less about our own wants, I know things will keep getting better. You don't have to be an Outsider to make a difference."
        />
       </div>

       <StyledFooter>
            <StyledFooterSpan1>Outsider NewsLetter Property of:</StyledFooterSpan1><StyledFooterSpan2>Eleanor Dragon</StyledFooterSpan2>
       </StyledFooter>
       </div>
    );
  }
}