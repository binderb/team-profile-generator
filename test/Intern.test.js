const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('New object should contain the assigned name, id, email, and school', () => {
    // arrange and act
    const new_intern = new Intern('Ben',8,'ben@example.com','St. Olaf');
    // assert
    expect(new_intern.name).toEqual('Ben');
    expect(new_intern.id).toEqual(8);
    expect(new_intern.email).toEqual('ben@example.com');
    expect(new_intern.school).toEqual('St. Olaf');
  });
  describe('getName', () => {
    it('Method should return the employee name.', () => {
      // arrange and act
      const new_intern = new Intern('Ben',8,'ben@example.com','St. Olaf');
      // assert
      expect(new_intern.getName()).toEqual('Ben');
    });
  });
  describe('getId', () => {
    it('Method should return the employee id.', () => {
      // arrange and act
      const new_intern = new Intern('Ben',8,'ben@example.com','St. Olaf');
      // assert
      expect(new_intern.getId()).toEqual(8);
    });
  });
  describe('getEmail', () => {
    it('Method should return the employee email.', () => {
      // arrange and act
      const new_intern = new Intern('Ben',8,'ben@example.com','St. Olaf');
      // assert
      expect(new_intern.getEmail()).toEqual('ben@example.com');
    });
  });
  describe('getRole', () => {
    it('Method should return the employee role.', () => {
      // arrange and act
      const new_intern = new Intern('Ben',8,'ben@example.com','St. Olaf');
      // assert
      expect(new_intern.getRole()).toEqual('Intern');
    });
  });
  describe('getSchool', () => {
    it('Method should return the employee school.', () => {
      // arrange and act
      const new_intern = new Intern('Ben',8,'ben@example.com','St. Olaf');
      // assert
      expect(new_intern.getSchool()).toEqual('St. Olaf');
    });
  });
});