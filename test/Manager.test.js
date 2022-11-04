const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('New object should contain the assigned name, id, email, and office number', () => {
    // arrange and act
    const new_manager = new Manager('Ben',8,'ben@example.com',42);
    // assert
    expect(new_manager.name).toEqual('Ben');
    expect(new_manager.id).toEqual(8);
    expect(new_manager.email).toEqual('ben@example.com');
    expect(new_manager.officeNumber).toEqual(42);
  });
  describe('getName', () => {
    it('Method should return the employee name.', () => {
      // arrange and act
      const new_manager = new Manager('Ben',8,'ben@example.com',42);
      // assert
      expect(new_manager.getName()).toEqual('Ben');
    });
  });
  describe('getId', () => {
    it('Method should return the employee id.', () => {
      // arrange and act
      const new_manager = new Manager('Ben',8,'ben@example.com',42);
      // assert
      expect(new_manager.getId()).toEqual(8);
    });
  });
  describe('getEmail', () => {
    it('Method should return the employee email.', () => {
      // arrange and act
      const new_manager = new Manager('Ben',8,'ben@example.com',42);
      // assert
      expect(new_manager.getEmail()).toEqual('ben@example.com');
    });
  });
  describe('getRole', () => {
    it('Method should return the employee role.', () => {
      // arrange and act
      const new_manager = new Manager('Ben',8,'ben@example.com',42);
      // assert
      expect(new_manager.getRole()).toEqual('Manager');
    });
  });
});