export interface LeaveType {
  id: number;
  leaveType: string;
  shortCode: string;
  annualEntitlement: number;
  carryForward: boolean;
  maxCarryForward: number;
}