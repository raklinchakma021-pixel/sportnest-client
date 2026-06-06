"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Eye, EyeSlash, ArrowLeft } from "@gravity-ui/icons";
import { Button, Card, Separator } from "@heroui/react";
import { authClient, signIn } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  const [mounted, setMounted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      general: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
      general: "",
    });
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      triggerShake();
      return;
    }

    setLoading(true);

    try {
      const response = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (response?.error) {
        setErrors((prev) => ({
          ...prev,
          general: "Incorrect email or password",
        }));

        triggerShake();
        return;
      }

      window.location.href = "/";
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: "Something went wrong. Try again.",
      }));

      triggerShake();
    } finally {
      setLoading(false);
    }
  };
 const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
 <section className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-black">
    
      {/* shake wrapper (FIXED hydration-safe animation) */}
      <div className={shake ? "animate-shake" : ""}>
          <Card className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
          
          {/* Back */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Sign in to continue
            </p>
          </div>

          {/* General Error */}
          {errors.general && (
            <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {errors.general}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition
                  ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-zinc-300 focus:border-black dark:border-zinc-700 dark:focus:border-white"
                  }`}
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full rounded-2xl border px-4 py-3 pr-12 outline-none transition
                    ${
                      errors.password
                        ? "border-red-500 focus:border-red-500"
                        : "border-zinc-300 focus:border-black dark:border-zinc-700 dark:focus:border-white"
                    }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeSlash className="h-5 w-5 text-zinc-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-zinc-500" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit (FIXED - no SSR mismatch from loading prop) */}
            <Button
              type="submit"
              color="primary"
              radius="lg"
              className="w-full font-semibold bg-green-600"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
            <p className="mt-6 text-center text-sm text-zinc-500">
                    Don't have an account?{" "}
                    <Link
                      href="/auth/signup"
                      className="font-medium text-black hover:underline dark:text-white"
                    >
                      Sign Up
                    </Link>
                  </p>

                  <div className="flex justify-center items-center gap-3">
          <Separator />
          <div className="whitespace-nowrap"> Or sign up with </div>
          <Separator />
        </div>
        <div>
          <Button
            onClick={handleGoogleSignin}
            variant="outline"
            className={"w-full rounded-none"}
          >
            <FcGoogle /> Sign in with Google
          </Button>
        </div>
        </Card>
      </div>

      {/* Shake animation */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
          75% { transform: translateX(-6px); }
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </section>
  );
}