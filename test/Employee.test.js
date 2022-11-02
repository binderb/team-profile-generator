const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('New object should contain the assigned name, id, and email', () => {
    // arrange and act
    const new_employee = new Employee('Ben',0,'ben@example.com');
    // assert
    expect(new_employee.name).toEqual('Ben');
    expect(new_employee.id).toEqual(0);
    expect(new_employee.email).toEqual('ben@example.com');
  });
});