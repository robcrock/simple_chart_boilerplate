d3.csv('data.csv').then(data => {

  createChart(data);

});

function createChart(data) {

  const chart = new Chart({
    element: document.querySelector('body'),
    data: data
  });

}

class Chart {

  constructor(opts) {

    this.element = opts.element;
    this.data = opts.data;

    this.draw();

  }

  draw() {

    // Define a space to place everything you would want. This
    // includes titles, axises, axis labels, and the chart.
    this.width = 960;
    this.height = 500;
    this.margin = { top: 75, right: 15, bottom: 50, left: 50 };

    // The inner height and width relate the space your chart will
    // occupy excluding space for tiles and axises.
    this.innerHeight = this.height - (this.margin.top + this.margin.bottom);
    this.innerWidth = this.width - (this.margin.right + this.margin.left);

    const svg = d3.select(this.element).append('svg');

    svg
      .attr('width', this.width)
      .attr('height', this.height);

    this.plot = svg.append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    // Each of these methods have an important role to play
    this.createScales();
    this.addAxes();
    this.addTitles();
    this.addChart();

  }

  createScales() {
    // The scales we need will depend on our chart.

  }

  addAxes() {
    // The axises we need will depend on our chart.

  }

  addTitles() {
    // This functions moves all our axis around
    
  }

  addChart() {
    // Now we get to finally see those lovely SVGs

  }

}
