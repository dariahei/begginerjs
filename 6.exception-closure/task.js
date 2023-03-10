// let throwError = new Error ('Невалидное значение');

function parseCount(input) {
    let result = Number.parseFloat(input);
    if (Number.isNaN(result)){
      throw Error ('Невалидное значение');
    }
    return result;
  }

function validateCount(newInput) {
  try { 
   return parseCount(newInput);
      }
  catch (e) {
    return e;
      }
}

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
    this.examination();
    // this.perimeter = 0;
    // this.area = 0;
    
  }

  examination() {
    if (this.firstSide + this.secondSide < this.thirdSide ||
      this.secondSide + this.thirdSide < this.firstSide ||
      this.firstSide + this.thirdSide < this.secondSide) {
      throw Error('Треугольник с такими сторонами не существует');
    }
  }

  // set perimeter(value) {
  //   this._perimeter = this.firstSide + this.secondSide + this.thirdSide;
  // }
  get perimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  }

 // set area (value) {
 //    let p = 0.5 * this.perimeter;
 //    this._area = Number.parseFloat((Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide))).toFixed(3));
 //        }
  get area () {
    let p = 0.5 * this.perimeter;
    return Number.parseFloat((Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide))).toFixed(3));
    }
}

  function getTriangle (firstSide, secondSide, thirdSide){
    try {
      return new Triangle(firstSide, secondSide, thirdSide);
    }
    catch {
      return {
       get perimeter () {
         return ('Ошибка! Треугольник не существует');
       },
        get area () {
          return ('Ошибка! Треугольник не существует');
       },
      }
    }
    }
    // catch {
    //     Object.create ( Triangle, {
    //       get perimeter() {
    //         return this._perimeter = 'Ошибка! Треугольник не существует';
    //         } 
          
    //       get area() {
    //         return this._area = 'Ошибка! Треугольник не существует';
    //         }
    //     })
    //   }
  