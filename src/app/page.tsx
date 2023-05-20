"use client";
import { useState, useEffect } from "react";
import { FC } from "react";
import Loading from "./loading";
import Link from "next/link";
import Courses from "@/components/courses";
interface HomeProps {};

const Home = async ({}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h1>Homepage</h1>
      <Courses />
    </div>
  )
}

export default Home;