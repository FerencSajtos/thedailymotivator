/*    const arr = [['I\'m not afraid of computers taking over the world. They\'re just sitting there. I can hit them with a two by four.',"Thom Yorke"],
    ['People have to follow their hearts, and if their hearts lead them to WalMart, so be it.','Maynard James Keenan'],
    ['That men do not learn very much from the lessons of history is the most important of all the lessons that history has to teach.','Aldous Huxley'],
    ['The surest way to work up a crusade in favor of some good cause is to promise people they will have a chance of maltreating someone. To be able to destroy with good conscience, to be able to behave badly and call your bad behavior \'righteous indignation\' — this is the height of psychological luxury, the most delicious of moral treats.','Aldous Huxley'],
    ['All God does is watch us and kill us when we get boring. We must never, ever be boring.','Chuck Palahniuk'],
    ['Have your adventures, make your mistakes, and choose your friends poorly -- all these make for great stories.','Chuck Palahniuk'],
    ['Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming "Wow! What a Ride!','Hunter S. Thompson'],
    ['Life has become immeasurably better since I have been forced to stop taking it seriously.','Hunter S. Thompson'],
    ['Music has always been a matter of Energy to me, a question of Fuel. Sentimental people call it Inspiration, but what they really mean is Fuel. I have always needed Fuel. I am a serious consumer. On some nights I still believe that a car with the gas needle on empty can run about fifty more miles if you have the right music very loud on the radio.','Hunter S. Thompson'],
    ['Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?','George Carlin'],
    ['“Meow” means “woof” in cat.','George Carlin'],
    ['I think I am, therefore, I am... I think.','George Carlin'],
    ['Some people have no idea what they\'re doing, and a lot of them are really good at it.','George Carlin'],
    ['The Cookie Monster is anarchic, dynamic and madly driven by a very specific, but also totally random, aim: he wants cookies. He wants to charge around crazily smashing cookies into his mouth. He will never get enough cookies. It’s unclear whether he understands this. Maybe he imagines some future stage of sated calm which he might achieve if, miraculously, he were to obtain all the cookies he desires. Or maybe he is wiser than that and knows it’s all about the journey, his endless quest for biscuits.','David Mitchell'],
    ['If we all just settle into small, mutually ignorant online support groups exchanging comforting half-truths, then civilisation is in for a rough ride. No one will know what is really going on, and working out what is really going on has, for most of history, been humankind’s main purpose. Losing that is a high price to pay for being able to order pizza without speaking to anyone.','David Mitchell'],
    ['So I\'ve tried to make this book as dense as possible, like a neutron star. And if you think I came up with that simile by googling \'What stuff is most dense?\', you\'d be wrong. I already knew neutron stars were maybe dense before I googled it to make sure.','Richard Ayoade'],
    ['My opinions may have changed, but not the fact that I\'m right.','Ashleigh Brilliant'],
    ['Most people work just hard enough not to get fired and get paid just enough money not to quit.','George Carlin'],
    ['The road to success is always under construction.','Lily Tomlin'],
    ['Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.','Martin Golding'],
    ['One man\'s crappy software is another man\'s full-time job.','Jessica Gaston']]; */
    const arr = [
        ['Fuck you.'],
        ['Just give up already.'],
        ['It\'s never going to happen.'],
    ['There is no point in trying.'],
    ['Why even bother?']];
function newQuote(){
   let index = Math.floor((Math.random() * arr.length));
   document.getElementById('quote').innerHTML = arr[index];
}