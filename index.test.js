const { yearsUntil100 } = require('./index');

describe('Student info (student.json)', () => {
  const student = require('./student.json');
  test('classCode is filled in', () => { expect(student.classCode).toBeTruthy(); });
  test('fullName is filled in', () => { expect(student.fullName).toBeTruthy(); });
  test('studentNumber is filled in', () => { expect(student.studentNumber).toBeTruthy(); });
  test('studentEmail is filled in', () => { expect(student.studentEmail).toBeTruthy(); });
  test('personalEmail is filled in', () => { expect(student.personalEmail).toBeTruthy(); });
  test('githubAccount is filled in', () => { expect(student.githubAccount).toBeTruthy(); });
});

describe('Years until 100', () => {
  test('age 25 gives 75 years remaining', () => {
    expect(yearsUntil100(25)).toBe(75);
  });
  test('age 40 gives 60 years remaining', () => {
    expect(yearsUntil100(40)).toBe(60);
  });
});
