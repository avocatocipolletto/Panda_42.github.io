const observer = new IntersectionObserver((entries) => {
    entries.forEach ((entry) => {
        if(entry.isIntersecting)  {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide');
const hiddenElements1 = document.querySelectorAll('.hide-opposto');
const hiddenElements2 = document.querySelectorAll('.hide-intro');
hiddenElements.forEach((el) => observer.observe(el))
hiddenElements1.forEach((el) => observer.observe(el))
hiddenElements2.forEach((el) => observer.observe(el))

let btns = document.querySelectorAll("svg.icons");
let currentbtn = btns[0];

btns[0].setAttribute("class", "icons-over");

function handleScroll() {
    if (window.pageYOffset > 300) {
       b.style.color = "red";
    } else {
      b.style.color = "yellow";
    }
}

btns.forEach(b => {
    b.addEventListener('click', () => {
        currentbtn.removeAttribute("class", "icons-over");
        currentbtn.setAttribute("class", "icons");
        b.setAttribute("class", "icons-over");
        currentbtn = b;
    })
    window.addEventListener('scroll', handleScroll);
});


// grafico a barre
var ctx = document.getElementById('barChart').getContext('2d');

var data = {
  labels: ['Nord America', 'Europa', 'America Latina e Caraibi', 'Asia Centrale', 'Asia Orientale e Pacifico', 'Africa Sub-Saharan', 'Medio Oriente e nord Africa', 'Sud Asia'],
  datasets: [{
    label: 'Percentuale Diminuzione Gender Gap',
    data: [76.9, 76.6, 72.6, 69.1, 69.0, 67.8, 63.4, 62.4, 100],
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

var options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// grafico con le linee
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
            label: ['donne'], 
            data: [32, 33, 34, 35, 35, 37, 37, 70],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: ['uomini'], 
            data: [68, 67, 66, 65, 65, 63, 63, 70],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ]
    },
  options: {}
});


// seleziona il pulsante e il modal
var btn = document.getElementById("bttn5");
var modal = document.getElementById("myModal");

// quando il pulsante viene cliccato, mostra il modal
btn.onclick = function() {
  modal.style.display = "block";
}

// seleziona il pulsante per chiudere il modal
var span = document.getElementsByClassName("close")[0];

// quando il pulsante viene cliccato, nascondi il modal
span.onclick = function() {
  modal.style.display = "none";
}