import React from 'react';
import {Link} from 'react-router-dom';

function Details() {
  return (
    <section className="details">
      <h2>Details</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dignissim odio. Quisque feugiat lorem non vestibulum pharetra. Vivamus tempus, enim in feugiat interdum, mi orci condimentum risus, eget efficitur tellus nisl nec dui. Nullam quis varius elit. Aliquam massa enim, facilisis sed rutrum a, eleifend ac sapien. Donec eu sapien vulputate, condimentum sem in, molestie ipsum. Quisque euismod mauris eget porttitor dignissim. Nullam pharetra, risus at iaculis ultrices, turpis purus convallis justo, non ornare enim magna sed ex. Etiam venenatis ligula quis enim sodales, a maximus lorem laoreet. Suspendisse non molestie ligula. Curabitur sit amet turpis maximus, varius odio et, lacinia ipsum. Nunc luctus neque turpis, in accumsan turpis porttitor ut. Duis sodales diam vitae nisi ornare, mollis tristique massa aliquam. Aenean libero augue, sodales at justo vitae, scelerisque tristique risus.</p>
      <p>Pellentesque congue lectus a imperdiet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis vehicula elit. Duis nec cursus est. Integer sed est vestibulum, eleifend odio nec, condimentum nibh. In at dui in neque porttitor condimentum. Aenean pretium sem ut dui rutrum feugiat. Phasellus in ultricies tellus. Donec lacinia sagittis nisl, in malesuada est tincidunt id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer convallis diam sit amet dolor consequat ultricies. Mauris consectetur lacus et libero bibendum, eu mollis velit cursus. Cras id ex nulla. Maecenas condimentum, magna eu mollis consectetur, ante diam egestas mi, et egestas justo eros nec nisl.</p>
      <p>Fusce et nibh mattis, ultricies urna eu, finibus nisi. Nunc lobortis dictum faucibus. Nulla suscipit posuere dignissim. Vestibulum luctus posuere lorem non auctor. Proin non arcu venenatis, scelerisque nisl vel, suscipit nibh. Fusce urna turpis, molestie non lectus tempus, accumsan interdum dolor. Maecenas laoreet diam ac pellentesque vulputate. Etiam tempor quam vel lectus mollis egestas. Nullam accumsan urna nec lacus venenatis, a dapibus elit blandit. Nullam vel venenatis justo. Aenean ac turpis at mauris pretium interdum. Phasellus dictum, neque id finibus ullamcorper, libero felis porttitor mauris, ut sodales lacus arcu id tellus. Mauris sit amet massa ex. Morbi sit amet condimentum leo. Vivamus quis purus ex. Maecenas maximus erat nec magna dignissim fringilla.</p>
      <Link to="/">Back to home</Link>
    </section>
  )
}

export default Details;