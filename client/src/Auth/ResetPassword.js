import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


const ResetPassword = () => {
  const { id, token } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`/api/reset_password/${id}/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password }),
      });
      const data = await response.json();
      toast.success(data.message);
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        New Password:
        <input type="password" name="password" required />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" required />
      </label>
      <br />
      <button type="submit">Reset Password</button>
    </form>
  );
};


export default ResetPassword