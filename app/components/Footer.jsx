import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-white" aria-labelledby="footer-heading">
      <div class="hidden lg:justify-end md:grid md:grid-cols-1">
        <div class="w-full mt-12 md:mt-0">
          <div class="mt-8 lg:justify-end xl:mt-0">
            <h3 class="text-xs font-semibold tracking-wider text-blue-600 uppercase">Subscribe to our newsletter</h3>
            <p class="mt-4 text-sm text-gray-500 lg:ml-auto">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
              <form action="" method="post" id="revue-form" name="revue-form" target="_blank" class="p-1 mt-4 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex">
                <div class="flex-1 min-w-0 revue-form-group">
                  <label for="member_email" class="sr-only">Email address</label>
                  <input id="cta-email" type="email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email  " />
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                  <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" class="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Notify me</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer