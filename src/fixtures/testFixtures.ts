import { test as base } from "@playwright/test";
import { HomePage } from "../pages/homePage"

const test = base.extend<{
    homePage: HomePage
}>