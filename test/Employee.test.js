const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('New object should contain the assigned name, id, and email', () => {
    // arrange and act
    const new_employee = new Employee('Ben',8,'ben@example.com');
    // assert
    expect(new_employee.name).toEqual('Ben');
    expect(new_employee.id).toEqual(8);
    expect(new_employee.email).toEqual('ben@example.com');
  });
  describe('getName', () => {
    it('Method should return the initialized employee name.', () => {
      // arrange and act
      const new_employee = new Employee('Ben',8,'ben@example.com');
      // assert
      expect(new_employee.getName()).toEqual('Ben');
    });
  });
  describe('getId', () => {
    it('Method should return the initialized employee id.', () => {
      // arrange and act
      const new_employee = new Employee('Ben',8,'ben@example.com');
      // assert
      expect(new_employee.getId()).toEqual(8);
    });
  });
  describe('getEmail', () => {
    it('Method should return the initialized employee email.', () => {
      // arrange and act
      const new_employee = new Employee('Ben',8,'ben@example.com');
      // assert
      expect(new_employee.getEmail()).toEqual('ben@example.com');
    });
  });
  describe('getRole', () => {
    it('Method should return the initialized employee role.', () => {
      // arrange and act
      const new_employee = new Employee('Ben',8,'ben@example.com');
      // assert
      expect(new_employee.getRole()).toEqual('Employee');
    });
  });
});