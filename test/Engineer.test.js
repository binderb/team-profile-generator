const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('New object should contain the assigned name, id, email, and GitHub username', () => {
    // arrange and act
    const new_engineer = new Engineer('Ben',8,'ben@example.com','binderb');
    // assert
    expect(new_engineer.name).toEqual('Ben');
    expect(new_engineer.id).toEqual(8);
    expect(new_engineer.email).toEqual('ben@example.com');
    expect(new_engineer.github).toEqual('binderb');
  });
  describe('getName', () => {
    it('Method should return the initialized employee name.', () => {
      // arrange and act
      const new_engineer = new Engineer('Ben',8,'ben@example.com','binderb');
      // assert
      expect(new_engineer.getName()).toEqual('Ben');
    });
  });
  describe('getId', () => {
    it('Method should return the initialized employee id.', () => {
      // arrange and act
      const new_engineer = new Engineer('Ben',8,'ben@example.com','binderb');
      // assert
      expect(new_engineer.getId()).toEqual(8);
    });
  });
  describe('getEmail', () => {
    it('Method should return the initialized employee email.', () => {
      // arrange and act
      const new_engineer = new Engineer('Ben',8,'ben@example.com','binderb');
      // assert
      expect(new_engineer.getEmail()).toEqual('ben@example.com');
    });
  });
  describe('getRole', () => {
    it('Method should return the initialized employee role.', () => {
      // arrange and act
      const new_engineer = new Engineer('Ben',8,'ben@example.com','binderb');
      // assert
      expect(new_engineer.getRole()).toEqual('Engineer');
    });
  });
  describe('getGithub', () => {
    it('Method should return the initialized employee GitHub address.', () => {
      // arrange and act
      const new_engineer = new Engineer('Ben',8,'ben@example.com','binderb');
      // assert
      expect(new_engineer.getGithub()).toEqual('binderb');
    });
  });
});