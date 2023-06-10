# About

This is a simple timezone app that shows the time in different timezones as meta image when shared on social media platforms. It is written in Next.js and uses [luxon](https://moment.github.io/luxon/) for time manipulation.

# How to use

Make sure to use correct parameters in the URL. The URL is structured as follows:

```
/ [hour] / [minute] / [timezone]
```

For example, if you want to show the time as 10:00 AM Mumbai, India, you would use the following URL:

```
/10/00/ist
```

If you want to show the time as 10:00 AM New York, USA, you would use the following URL:

```
/10/00/est
```
