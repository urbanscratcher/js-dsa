/*
[Pseudo code]

function Morning(conscious, done, cereal)
  if conscious = TRUE then
    maths <- 0
    for 1 <= i <= done do
      maths <- maths + 1
    end for
    while cereal > 0 do
      cereal <- cereal - 1
    end while
  end if
  return "ready!"
end function

*/

const conscious = true;
const done = 5;
const cereal = 5;
console.log(Morning(conscious, done, cereal));

function Morning(consicous, done, cereal) {
  if (conscious === true) {
    let maths = 0;
    for (let i = 1; i <= done; i++) {
      maths++;
    }
    while (cereal > 0) {
      cereal--;
    }
  }
  return "ready!";
}
