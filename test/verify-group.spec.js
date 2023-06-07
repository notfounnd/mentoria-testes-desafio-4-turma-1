const assert = require('assert');
const sinon = require('sinon');
const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;

chai.use(spies);

const myGroupTest = [
  {
    name: 'test 1',
    age: '11',
    mail: 'teste1@mail.com',
  },
  {
    name: 'test 3',
    age: '12',
    mail: 'teste3@mail.com',
  },
  {
    name: 'test 4',
    age: '16',
    mail: 'teste4@mail.com',
  },
  {
    name: 'test 5',
    age: '17',
    mail: 'teste5@mail.com',
  },
];

describe('verify-group.js', function () {
  describe('verifyAgeGroup()', function () {
    const { verifyAgeGroup } = require('../src/verify-group');

    it('should return age group - children', function () {
      const ageGroup = verifyAgeGroup(myGroupTest[0].age);
      assert.equal(ageGroup, 'crianças');
    });

    it('should return age group - adolescent', function () {
      const ageGroup = verifyAgeGroup(myGroupTest[1].age);
      assert.equal(ageGroup, 'adolescentes');
    });

    it('should return age group - adult', function () {
      const ageGroup = verifyAgeGroup(myGroupTest[3].age);
      assert.equal(ageGroup, 'adultos');
    });

    it('should return age group - param number type', function () {
      const ageGroup = verifyAgeGroup(1);
      assert.equal(ageGroup, 'crianças');
    });

    it('should not return age group - param text type', function () {
      const ageGroup = verifyAgeGroup('test');
      assert.equal(ageGroup, 'grupo não definido');
    });

    it('should not return age group - param boolean type', function () {
      const ageGroup = verifyAgeGroup(true);
      assert.equal(ageGroup, 'grupo não definido');
    });
  });

  describe('printPerson()', function () {
    const verify = require('../src/verify-group');

    afterEach(function () {
      sinon.restore();
      chai.spy.restore();
    });

    it('should call printPerson method', function () {
      const stub = sinon.stub(verify, 'printPerson');

      verify.printPerson(myGroupTest[0]);
      sinon.assert.calledOnce(stub);
      sinon.assert.calledWith(stub, myGroupTest[0]);
    });

    it('should print person info', function () {
      const spy = chai.spy.on(verify, 'printPerson');

      verify.printPerson(myGroupTest[3]);
      expect(spy).to.have.been.called();
    });

    it('should not print person info', function () {
      const spy = chai.spy.on(verify, 'printPerson');

      const person = {
        name: 'test 1',
        age: '11',
      };

      verify.printPerson(person);
      expect(spy).to.have.been.called();
    });
  });

  describe('countPeople()', function () {
    const { countPeople } = require('../src/verify-group');

    it('should count people in object', function () {
      const count = countPeople(myGroupTest);

      assert.equal(count, 4);
    });

    it('should not count people in object', function () {
      const message = countPeople('teste');

      assert.equal(message, 'objeto não definido');
    });
  });
});
