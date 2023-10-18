// this file is use for Managing the option button

let ActiveCellDisplay = document.getElementById("Active_cell_Id");
let activecell = null;
let activeProperty;
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underlined = document.getElementById("underline");
let fontsizebtnref = document.getElementById("selectno");

function OnHighlightingcell() {
  // adding And Removeing bold btn class
  if (activeProperty.isBoldSelected) {
    bold.classList.add("Activemenu");
  } else {
    bold.classList.remove("Activemenu");
  }
  // adding And Removeing italic btn class
  if (activeProperty.isItalicSelected) {
    italic.classList.add("Activemenu");
  } else {
    italic.classList.remove("Activemenu");
  }
  // adding And Removeing Underline btn class
  if (activeProperty.isUnderlineSelected) {
    underlined.classList.add("Activemenu");
  } else {
    underlined.classList.remove("Activemenu");
  }
  // changing the Class or all ALignItem btn
 Highlight_AlignBtn(activeProperty.textAlign);
 

//  Changing the value of the font size icon 

if(!activeProperty.fontSize){
  let fontSize = getComputedStyle(activecell).fontSize;
  
  fontsizebtnref.value = fontSize[0]+ fontSize[1];

}
else{
  fontsizebtnref.value = 16;

}



}


//

// This funcction is managing the dYNAMICLY change the Inner text of the option box 1 box

function onCellFocus(event) {
  if (activecell && activecell.id == event.target.id) {
    console.log("return");
    return;
  }
  activecell = event.target;

  ActiveCellDisplay.innerText = event.target.id;

  //  its retrive the Property of active cell

  let computeStyle = getComputedStyle(activecell);
  activeProperty = {
    fontFamily: computeStyle.fontFamily,
    isBoldSelected: computeStyle.fontWeight === "600",
    isItalicSelected: computeStyle.fontStyle === "italic",
    isUnderlineSelected: computeStyle.textDecoration.includes("underline"),
    textAlign: computeStyle.textAlign,
    textColor: computeStyle.color,
    backgroundColor: computeStyle.backgroundColor,
    fontSize: computeStyle.fontSize == "16px",
  };

  OnHighlightingcell();
}

// Bold click function
function Bold_Click(Boldbtnref) {
  Boldbtnref.classList.toggle("Activemenu");

  if (activecell) {
    if (activeProperty.isBoldSelected) {
      activecell.style.fontWeight = "400";
      // activeProperty.isBoldSelected = "false"
    } else {
      activecell.style.fontWeight = "600";
      // activeProperty.isBoldSelected = "true"
    }

    activeProperty.isBoldSelected = !activeProperty.isBoldSelected;
  }
}

// Italic click function

function Italic_Click(italicbtnref) {
  italicbtnref.classList.toggle("Activemenu");

  if (activecell) {
    if (activeProperty.isItalicSelected) {
      activecell.style.fontStyle = "normal";
      activeProperty.isItalicSelected = "false";
    } else {
      activecell.style.fontStyle = "italic";
      activeProperty.isItalicSelected = "true";
    }
    // activeProperty.isItalicSelected != activeProperty.isItalicSelected;
  }
}

//   Underline click function

function Underline_click(underlinebtnbtnref) {
  underlinebtnbtnref.classList.toggle("Activemenu");

  if (activecell) {
    if (activeProperty.isUnderlineSelected) {
      activecell.style.textDecoration = "none";
    } else {
      activecell.style.textDecoration = "underline";
    }
    activeProperty.isUnderlineSelected = !activeProperty.isUnderlineSelected;
  }
}

// Highligth the Align btn that is click
function Highlight_AlignBtn(Selectdbtnvalue) {
  let AlignAllBtn = document.getElementsByClassName("Alignitemclass");
  for (let i = 0; i < AlignAllBtn.length; i++) {
    if (AlignAllBtn[i].getAttribute("data-value") ==  Selectdbtnvalue) {
      AlignAllBtn[i].classList.add("Activemenu");
    } else {
      AlignAllBtn[i].classList.remove("Activemenu");
      
    }
  }
}
//Align item clicked function

function Align_text_click(Alignclickedbtnref) {
  let Selectdbtnvalue = Alignclickedbtnref.getAttribute("data-value");
  console.log(Selectdbtnvalue);
  Highlight_AlignBtn(Selectdbtnvalue);
  if (activecell) {
    activecell.style.textAlign = Selectdbtnvalue;
    activeProperty.textAlign = Selectdbtnvalue;
  }
}

// Text color function

function textColorchange(refrenceofinput) {
  let Selectedcolour = refrenceofinput.value;
  if (activecell) {
    activecell.style.color = Selectedcolour;
    activeProperty.textColor = Selectedcolour;
  }
}

// Background Colour function
function BackgroundColorchange(refrenceofinput) {
  let Selectedcolour = refrenceofinput.value;
  if (activecell) {
    activecell.style.backgroundColor = Selectedcolour;
    activeProperty.backgroundColor = Selectedcolour;
  }
}

// Font size changing function

function fontSizechange(refrenceofselect) {
  let Selectedfontsize = refrenceofselect.value;

  if (activecell) {
    activecell.style.fontSize = `${Selectedfontsize}px`;
    activeProperty.fontSize =Selectedfontsize;
   
  }
}
