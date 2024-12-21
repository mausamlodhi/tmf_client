function SignupForm() {
  return (
    <>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Signup</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {/* Submit Button */}
          <button type="submit" style={styles.signupButton}>
            SIGNUP
          </button>
          <p style={styles.loginText}>
            Already have an account?{" "}
            <a href="#" style={styles.link}>
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
export default SignupForm;
