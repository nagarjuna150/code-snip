
var ab=new GlideRecord('sysapproval_approver');
ab.addQuery('sysapproval','<Approval_record_sys_id>');
ab.query();
if(ab.next())
{
ab.approver.setDisplayValue('<User Display Name here>')';
ab.update();
}
