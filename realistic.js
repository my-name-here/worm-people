function choice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
function randint(x,y) {
  var index = Math.floor(Math.random() * y);
  return index;
}
var firstnames=['Alfred','Aaron','Adam','Alex','Ajax','Harfeld','Finn','Billy','Jeff','Fred','James','John','Robert','Michael','William','David','Richard','Charles','Joseph','Thomas','Joe','Alan'];
var last_name_endings=['ton','bet','bert','ford','sley','en','er','ano','berg','sky','stein','ago','otti','ello','etti','enheim']
function gen_character(){
  var character_description=[];

  var has_hat=choice([true,false])
  var hat=['none','none','none','none','fancy hat with feather','mysterious man hat','top hat','party hat','rounded hat with brim'];
  var hair=['lots of short strands','like harfeld','three strands','like dirt','like finnrietta','three strands on each side','spiky hair sticking up'];
  if (has_hat){
    character_description.push( `hat: ${choice(hat)} `)}
  if ( has_hat =false){
    character_description.push( `hair: ${choice(hair)}`)}
  var shirt=['none','none','none','none','none','none','none','fancy suit','crisscross blue and black','like harfelds','mysterious man shirt','red shirt saying wham in comic book spiky text bubble','green shirt with fuuny slogan','lab coat','blank shirt that says dac-corp','purple shirt','red coat'];
  character_description.push(`shirt: ${choice(shirt)}`)
  var both_hands_used=choice([true,false])
  if (both_hands_used=false){
    var hand1=['none','none','none','spoon','pen','jar','flask','ajax lives sign','clipboard','blakeford sign','none','mysterious man hat','sword','briefcase'];
    character_description.push(`hand1: ${choice(hand1)}`)
    var hand2=['none','none','none','spoon','pen','jar','flask','ajax lives sign','clipboard','blakeford sign','none','mysterious man hat','sword','briefcase'];    character_description.push(`hand2: ${choice(hand2)}`)}
  else{
    var hands=['none'];
    character_description.push(`hands: ${choice(hands)}`)}
  var eyes=['red square glasses','green ovals', 'black square glasses','blue squares','white ovals with dot surrounded by round glasses','black square glasses','circles with dot at center','circles with dot at center'];
  character_description.push(`eyes: ${choice(eyes)}`)
  var mouth=['rectangle with grid pattern','rounded teeth full set','rounded teeth full set','rounded teeth full set','rounded teeth  some missing','oval with grid'];
  character_description.push(`mouth: ${choice(mouth)}`)
  var nose=['none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','none','curvy ending in sharp point','just nostrils'];
  character_description.push(`nose: ${choice( nose)}`)
  var facial_hair=['none','none','none','none','none','none','none','none','none','none','black 2 part mustache','one part mustache','gray beard','thick mustache'];
  character_description.push(`facial hair: ${choice(facial_hair)}`)
  var colors_for_face=[];
  var i=0;
  for (i;i<=100;i++){colors_for_face.push('white')};
  colors_for_face.push('green')

  var colors_for_face=choice(colors_for_face)

  var face_color=colors_for_face
  character_description.push(`face color: ${face_color}`)

  if (randint(1,50)==1){
    var capes=['red cape,attached to shirt','red cape looped around neck'];
    character_description.push(`cape: ${choice(capes)}`)}
  return character_description};

function CharacterInfo(){
  var x=''
  var name=choice(firstnames)
  var last_start=choice(['Worm','Inch','Grub','Dirt','Wham'])    
                       
  if (last_start=='Dirt'){
    var name=''.concat((name),''.concat(' ',last_start ),choice(['ford','son','sky','stein']))}
  else if (last_start=='Worm'){
    var name=''.concat((name),''.concat(' ',last_start ),choice(['bet','ford','en','er','ano','berg','son','sky','stein','ago','otti','ello','etti']))}
  else if (last_start=='Wham'){
    var name=''.concat((name),''.concat(' ',last_start ),choice(['bet','ford','en','er','berg','son','sky','stein','enheim','ton']))}
  else{
    var name=''.concat(name,''.concat(' ',last_start),choice(last_name_endings))}
  var x=''.concat(x,` name: ${name} \n `)
  var char=gen_character()
  var i=0;
  document.write('<br>')
  document.write(x)
  document.write('<br>')
  for (i = 0; i < char.length; i++){
    
    document.write(char[i])
    document.write('<br>')}
  
  };

CharacterInfo()
