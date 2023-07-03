// Uncomment the code below and write your tests
import ladosh from 'lodash';
import {
  BankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

let bankAccount: BankAccount;
const initialBalance = 1000;

beforeEach(() => {
  bankAccount = getBankAccount(initialBalance);
});

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    expect(bankAccount.getBalance()).toEqual(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => bankAccount.withdraw(2000)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const toAccount = getBankAccount(500);
    expect(() => bankAccount.transfer(2000, toAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    expect(() => bankAccount.transfer(300, bankAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    // Write your test here
    const beforeDepositBallance = bankAccount.getBalance();
    const depositSum = 5000;
    bankAccount.deposit(depositSum);
    const afterDepositBallance = bankAccount.getBalance();
    expect(afterDepositBallance).toEqual(beforeDepositBallance + depositSum);
  });

  test('should withdraw money', () => {
    // Write your test here
    const beforeWithdrawBallance = bankAccount.getBalance();
    const withdrawSum = 500;
    bankAccount.withdraw(withdrawSum);
    const afterWithdrawBallance = bankAccount.getBalance();
    expect(afterWithdrawBallance).toEqual(beforeWithdrawBallance - withdrawSum);
  });

  test('should transfer money', () => {
    // Write your test here
    const initAcc2Sum = 500;
    const account2 = getBankAccount(initAcc2Sum);
    const transferSum = 100;
    bankAccount.transfer(transferSum, account2);
    const acc2AfterTransferBalance = account2.getBalance();
    expect(acc2AfterTransferBalance).toEqual(initAcc2Sum + transferSum);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    jest.spyOn(ladosh, 'random').mockReturnValue(1);
    const result = await bankAccount.fetchBalance();
    expect(typeof result).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    jest.spyOn(ladosh, 'random').mockReturnValue(1);
    const beforeSyncBallance = bankAccount.getBalance();
    await bankAccount.synchronizeBalance();
    const afterSyncBallance = bankAccount.getBalance();
    expect(beforeSyncBallance).not.toEqual(afterSyncBallance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    jest.spyOn(ladosh, 'random').mockReturnValue(0);
    try {
      await bankAccount.synchronizeBalance();
    } catch (err) {
      expect(err).toBeInstanceOf(SynchronizationFailedError);
    }
  });
});
