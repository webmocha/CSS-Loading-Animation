# Demo

[webmocha.github.io/CSS-Loading-Animation](https://webmocha.github.io/CSS-Loading-Animation/)

# Requirements

The UI wants to display a loader when making a call to the server.

The loading animation should start when the call starts, and end when the response completes, also handling timeouts.

The animation should look smooth whether the response completes instantly (10ms) or takes a long time (3500ms), or times out (> 5000ms).

# Solution

Since we don't know when the server will respond, and we do define a max timeout of 5000ms, we animate the initial load about 90% of completion.

Once the server responds, animate the loader from it's current state, to 100% of the animation faster.

Use easing for animation tweens to make the animation look seamless.

This will make the loader appear to finish when the request actually finishes.
